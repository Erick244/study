package com.fullstackoauth2.server.config;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import com.fullstackoauth2.server.models.AppUser;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class OAuth2LoginSuccessHandle implements AuthenticationSuccessHandler {

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {

		DefaultOAuth2User oAuth2User = (DefaultOAuth2User) authentication.getPrincipal();

		AppUser appUser;
		if (isGoogleUser(oAuth2User)) {
			appUser = AppUser.fromGoogleUser(oAuth2User);
		} else if (isGitHubUser(oAuth2User)) {
			appUser = AppUser.fromGitHubUser(oAuth2User);
		} else {
			throw new IllegalStateException("Invalid OAuth2 provider");
		}

		AppAuthenticationToken token = new AppAuthenticationToken(appUser);

		SecurityContextHolder.getContext().setAuthentication(token);
		response.sendRedirect("http://localhost:3000/protected");
	}

	private boolean isGoogleUser(DefaultOAuth2User oAuth2User) {
		return oAuth2User.toString().contains("google");
	}

	private boolean isGitHubUser(DefaultOAuth2User oAuth2User) {
		return oAuth2User.toString().contains("github");
	}

}
