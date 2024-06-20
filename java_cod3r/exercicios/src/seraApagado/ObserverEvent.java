package seraApagado;

@FunctionalInterface
public interface ObserverEvent {

	public void onEvent(Event event);
}
