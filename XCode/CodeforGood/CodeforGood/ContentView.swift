//
//  ContentView.swift
//  CodeforGood
//
//  Created by Victor Cadena on 10/18/24.
//

import SwiftUI

struct ContentView: View {
    @State private var isVisible = false // State variable to control opacity
    @State private var showHomeView = false // State variable to navigate to HomeView

    var body: some View {
        ZStack {
            if showHomeView {
                // Show HomeView after the splash screen
                HomeView()
                    .transition(.opacity) // Fade transition when switching views
            } else {
                // Splash screen
                Image("Storm+Center+of+Hope+and+Service+Logo+F-01-720w")
                    .resizable()
                    .scaledToFit()
                    .frame(maxWidth: 300) // *Limit the max width to avoid large image issues
                    .opacity(isVisible ? 1.0 : 0.0)
                    .transition(.opacity) // Add transition for fade-in effect
                    .onAppear {
                        // Start the fade-in animation
                        withAnimation(.easeIn(duration: 1.0)) {
                            isVisible = true
                        }
                        // Delay for 2 seconds before transitioning to HomeView
                        DispatchQueue.main.asyncAfter(deadline: .now() + 1.8) {
                            withAnimation {
                                showHomeView = true
                            }
                        }
                    }
            }
        }
        .animation(.easeOut, value: showHomeView) // Add animation when showHomeView changes
    }
}

#Preview {
    ContentView()
}
