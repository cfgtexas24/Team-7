//
//  ResourcesView.swift
//  CodeforGood
//
//  Created by Victor Cadena on 10/18/24.
//

import SwiftUI
import WebKit

// WebView struct to display embedded YouTube videos
struct WebView: UIViewRepresentable {
    let urlString: String

    func makeUIView(context: Context) -> WKWebView {
        return WKWebView()
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {
        if let url = URL(string: urlString) {
            let request = URLRequest(url: url)
            uiView.load(request)
        }
    }
}

// ResourcesView struct where you display the videos
struct ResourcesView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                Text("Self Improvement Videos")
                    .font(.title)
                    .padding(.bottom, 10)
                
                // Credit vs Debit Video
                VStack {
                    Text("Credit vs Debit")
                        .font(.headline)
                    WebView(urlString: "https://www.youtube.com/embed/sm0FzHMInig")
                        .frame(height: 200)
                        .cornerRadius(10)
                }
                
                // Budgeting Routine Video
                VStack {
                    Text("Budgeting Routine")
                        .font(.headline)
                    WebView(urlString: "https://www.youtube.com/embed/IIKr2915l2g")
                        .frame(height: 200)
                        .cornerRadius(10)
                }
                
                // Goal Setting Video
                VStack {
                    Text("Goal Setting")
                        .font(.headline)
                    WebView(urlString: "https://www.youtube.com/embed/XpKvs-apvOs")
                        .frame(height: 200)
                        .cornerRadius(10)
                }
                
                // New Videos
                VStack {
                    Text("How to Stop Procrastinating")
                        .font(.headline)
                    WebView(urlString: "https://www.youtube.com/embed/QS5-Z-oP-Hw")
                        .frame(height: 200)
                        .cornerRadius(10)
                }
                
                VStack {
                    Text("Inside the Mind of a Master Procrastinator")
                        .font(.headline)
                    WebView(urlString: "https://www.youtube.com/embed/arj7oStGLkU")
                        .frame(height: 200)
                        .cornerRadius(10)
                }
                
                VStack {
                    Text("The Science of Productivity")
                        .font(.headline)
                    WebView(urlString: "https://www.youtube.com/embed/wljRiAofFJ8")
                        .frame(height: 200)
                        .cornerRadius(10)
                }
                // Helpful Websites Section
                Text("Helpful Websites")
                    .font(.title)
                    .padding(.top, 20)
                
                // Website Cards
                VStack {
                    WebsiteCardView(title: "Texas Workforce Commission", description: "Employment services and benefits in Texas.", url: "https://www.twc.texas.gov/")
                    WebsiteCardView(title: "Your Texas Benefits", description: "Apply for state benefits and services.", url: "https://yourtexasbenefits.com//Learn/Home")
                    WebsiteCardView(title: "Feeding America", description: "Find a local food bank near you.", url: "https://www.feedingamerica.org/find-your-local-foodbank")
                }
            }
                
                Spacer()
            }
            .padding()
        }
    }

// WebsiteCardView struct to display website links as cards
struct WebsiteCardView: View {
    let title: String
    let description: String
    let url: String

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(title)
                .font(.headline)
                .foregroundColor(.blue)
            Text(description)
                .font(.subheadline)
                .foregroundColor(.gray)
            Button(action: {
                openWebsite(url)
            }) {
                Text("Visit Website")
                    .font(.subheadline)
                    .foregroundColor(.white)
                    .padding()
                    .frame(maxWidth: .infinity)
                    .background(Color.blue)
                    .cornerRadius(10)
            }
        }
        .padding()
        .background(Color(UIColor.systemGray6))
        .cornerRadius(10)
        .shadow(radius: 5)
        .padding(.vertical, 5)
    }
    // Function to open the website URL
        private func openWebsite(_ url: String) {
            if let websiteURL = URL(string: url) {
                UIApplication.shared.open(websiteURL)
            }
        }
    }
// PreviewProvider for ResourcesView to enable the app preview
struct ResourcesView_Previews: PreviewProvider {
    static var previews: some View {
        ResourcesView()
            .previewDevice("iPhone 14 Pro") // Specify the device for the preview
    }
}
