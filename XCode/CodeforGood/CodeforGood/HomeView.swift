//
//  HomeView.swift
//  CodeforGood
//
//  Created by Victor Cadena on 10/18/24.
//

import SwiftUI


struct HomeView: View {
    var body: some View {
        ZStack {
            // User Profile button in the top right
            HStack {
                Spacer()
                VStack {
                    NavigationLink(destination: UserProfileView()) {
                        Image(systemName: "person.crop.circle")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 50, height: 50)
                            .padding()
                            .background(Color.gray.opacity(0.2))
                            .clipShape(Circle())
                    }
                    Text("Profile") // Add your desired text here
                        .font(.caption)
                        .foregroundColor(.primary)
                        .padding(.top, 5)
                }
                .padding(.top, 20) // Adjust this value to move the button higher
                .padding(.trailing, 20) // Adjust this value for horizontal spacing
            }
            
            .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topTrailing)
            
            // Centered VStack for the other buttons
            VStack(spacing: 50) {
                NavigationLink(destination: ResourcesView()) {
                    HomeIconButton(iconName: "book.fill", label: "Resources")
                }
                NavigationLink(destination: EventsView()) {
                    HomeIconButton(iconName: "calendar.and.person", label: "Events")
                }
                NavigationLink(destination: LifeLessonsView()) {
                    HomeIconButton(iconName: "person.3.fill", label: "Life Lessons")
                }
            }
            .padding()
        }
    }
}
// Custom button style for the icons
struct HomeIconButton: View {
    let iconName: String
    let label: String
    
    var body: some View {
        VStack {
            Image(systemName: iconName)
                .resizable()
                .scaledToFit()
                .frame(width: 50, height: 50)
                .padding()
                .background(Color.blue.opacity(0.2))
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
