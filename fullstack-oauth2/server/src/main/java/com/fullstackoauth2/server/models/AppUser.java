package com.fullstackoauth2.server.models;

import org.springframework.security.oauth2.core.user.DefaultOAuth2User;

public class AppUser {
	private String id;
	private String username;
	private String imageUrl;
	private String provider;

	public static AppUser fromGoogleUser(DefaultOAuth2User OAuth2User) {
		AppUser appUser = new AppUser();

		appUser.id = OAuth2User.getName();
		appUser.username = OAuth2User.getAttribute("name");
		appUser.imageUrl = OAuth2User.getAttribute("picture");
		appUser.provider = "google";

		return appUser;
	}

	public static AppUser fromGitHubUser(DefaultOAuth2User OAuth2User) {
		AppUser appUser = new AppUser();

		appUser.id = OAuth2User.getName();
		appUser.username = OAuth2User.getAttribute("login");
		appUser.imageUrl = OAuth2User.getAttribute("avatar_url");
		appUser.provider = "github";

		return appUser;
	}

	public String getId() {
		return id;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public String getUsername() {
		return username;
	}

	public String getProvider() {
		return provider;
	}

}
