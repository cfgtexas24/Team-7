//
//  HomeView.swift
//  CodeforGood
//
//  Created by Victor Cadena on 10/18/24.
//

import SwiftUI


struct HomeView: View {
    var body: some View {
        NavigationView { // Add a NavigationView to enable navigation
            ZStack {
                // User Profile button in the top right
                HStack {
                    Spacer()
                    VStack {
                        NavigationLink(destination: UserProfileView()) {
                            Image(systemName: "person.crop.circle")
                                .resizable()
                                .scaledToFill()
                                .frame(width: 20, height: 20)
                                .padding()
                                .background(Color(hex: "#2E3097").opacity(0.2))
                                .clipShape(Circle())
                        }
                        Text("Profile") // Add your desired text here
                            .font(.caption)
                            .foregroundColor(.primary)
                            .padding(.top, 5)
                    }
                    .padding(.vertical, -16) // Adjust this value to move the button higher
                    .padding(.horizontal, 30) // Adjust this value for horizontal spacing
                }
                
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topTrailing)
                
                // Logo and Centered VStack for the other buttons
                VStack(spacing: 50) {
                    // Add the company logo
                    Image("Storm_Center_of_Hope_and_Service_Logo_NoBackground")
                        .resizable()
                        .scaledToFit()
                        .frame(width: 280, height: 80) // Adjust as needed
                        .padding()
                    
                    // Other navigation buttons
                    VStack(spacing: 30) {
                        NavigationLink(destination: ResourcesView()) {
                            HomeIconButton(iconName: "book.fill", label: "Resources", backgroundColor: Color(hex: "#2E3097"))
                        }
                        NavigationLink(destination: EventsView()) {
                            HomeIconButton(iconName: "calendar.and.person", label: "Events", backgroundColor: Color(hex: "#D9C912"))
                        }
                        NavigationLink(destination: LifeLessonsView()) {
                            HomeIconButton(iconName: "person.3.fill", label: "Life Lessons", backgroundColor: Color(hex: "#2E3097"))
                        }
                    }
                    .padding(.top, 30)
                }
                .padding()
            }
        }
    }
}
// Custom button style for the icons
struct HomeIconButton: View {
    let iconName: String
    let label: String
    let backgroundColor: Color // Add a color parameter for customization
    
    var body: some View {
        VStack {
            Image(systemName: iconName)
                .resizable()
                .scaledToFit()
                .frame(width: 60, height: 60)
                .padding()
                .background(Color(hex: "#2E3097").opacity(0.2))
                .clipShape(RoundedRectangle(cornerSize: CGSize(width: 10, height: 10)))
            
            Text(label)
                .font(.caption)
        }
        .foregroundColor(.primary)
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            HomeView()
        }
    }
}
        
        
#Preview {
    HomeView()
    }
