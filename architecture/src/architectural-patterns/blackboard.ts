// Blackboard
export class Blackboard {
    readonly states: Map<string, any> = new Map();

    updateState(key: string, value: any): void {
        this.states.set(key, value);
        console.log(`Updated state: ${key} = ${value}`);
    }

    getState(key: string): any {
        return this.states.get(key);
    }
}

//Knowledge Sources
export interface KnowledgeSource {
    evaluate(blackboard: Blackboard): void;
}

export class PositiveWordsAnalysis implements KnowledgeSource {
    private positiveWords = ["good", "happy", "joy", "excellent", "fantastic"];

    evaluate(blackboard: Blackboard): void {
        const text = blackboard.getState("text");

        if (text) {
            const positiveWordsCount = this.positiveWords.filter((word) =>
                text.includes(word)
            ).length;

            blackboard.updateState("positiveScore", positiveWordsCount);
        }
    }
}

export class NegativeWordsAnalysis implements KnowledgeSource {
    private negativeWords = ["bad", "sad", "terrible", "horrible", "awful"];

    evaluate(blackboard: Blackboard): void {
        const text = blackboard.getState("text");

        if (text) {
            const negativeWordsCount = this.negativeWords.filter((word) =>
                text.includes(word)
            ).length;

            blackboard.updateState("negativeScore", negativeWordsCount);
        }
    }
}

export class NeutralSentimentAnalysis implements KnowledgeSource {
    evaluate(blackboard: Blackboard): void {
        const positiveScore = blackboard.getState("positiveScore") | 0;
        const negativeScore = blackboard.getState("negativeScore") | 0;

        let sentiment = "neutral";

        if (positiveScore > negativeScore) {
            sentiment = "positive";
        } else if (positiveScore < negativeScore) {
            sentiment = "negative";
        }

        blackboard.updateState("sentiment", sentiment);
    }
}

// Controller
export class Controller {
    private knowledgeSources: KnowledgeSource[] = [];

    addKnowledgeSource(source: KnowledgeSource): void {
        this.knowledgeSources.push(source);
    }

    operate(blackboard: Blackboard): void {
        let changes = true;

        while (changes) {
            changes = false;

            for (const source of this.knowledgeSources) {
                const previousState = JSON.stringify(blackboard.states);

                source.evaluate(blackboard);

                const currentState = JSON.stringify(blackboard.states);

                if (previousState !== currentState) {
                    changes = true;
                }
            }
        }
    }
}

// Usage
const controller = new Controller();
controller.addKnowledgeSource(new PositiveWordsAnalysis());
controller.addKnowledgeSource(new NegativeWordsAnalysis());
controller.addKnowledgeSource(new NeutralSentimentAnalysis());

const blackboard = new Blackboard();
blackboard.updateState("text", "I am very happy today!");

controller.operate(blackboard);

console.log(blackboard.getState("sentiment")); // Output: positive
