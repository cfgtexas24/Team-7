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
// ResourcesView struct where you display the videos and helpful websites
struct ResourcesView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                Text("Helpful Websites")
                    .font(.title)
                    .padding(.top, 20)

                // Website Cards for helpful resources
                VStack {
                    WebsiteCardView(title: "Dallas County Housing Assistance", description: "Housing assistance and support in Dallas County.", url: "https://www.dallascounty.org/cares-act/housing-assistance-en.php")
                    WebsiteCardView(title: "Emergency Housing Resources", description: "Find emergency housing resources and services.", url: "https://dhantx.com/applicants/emergency-housing-resources/")
                    WebsiteCardView(title: "Texas Workforce Commission", description: "Employment services and benefits in Texas.", url: "https://www.twc.texas.gov/")
                    WebsiteCardView(title: "Your Texas Benefits", description: "Apply for state benefits and services.", url: "https://yourtexasbenefits.com//Learn/Home")
                    WebsiteCardView(title: "Feeding America", description: "Find a local food bank near you.", url: "https://www.feedingamerica.org/find-your-local-foodbank")

                    // Emergency Shelters
                    WebsiteCardView(title: "Austin Street Center", description: "Emergency shelter for the homeless.", url: "https://www.austinstreet.org")
                    WebsiteCardView(title: "The Bridge", description: "Homeless recovery center in Dallas.", url: "https://www.bridgehrc.org")
                    WebsiteCardView(title: "Dallas Life Foundation", description: "Christian-based homeless recovery center.", url: "https://www.dallaslife.org")
                    WebsiteCardView(title: "Housing Crisis Center", description: "Provides housing assistance and resources.", url: "https://www.hccdallas.org")
                    WebsiteCardView(title: "Interfaith Dallas", description: "Offers emergency housing and support.", url: "https://www.interfaithdallas.org")
                    WebsiteCardView(title: "The Red Cross", description: "Dallas Chapter of the Red Cross.", url: "https://www.redcross.org")
                    WebsiteCardView(title: "The Samaritan Inn", description: "Homeless shelter providing housing and care.", url: "https://www.saminn.org")
                    WebsiteCardView(title: "Union Gospel Mission", description: "Shelter and support for the homeless.", url: "https://www.ugmdallas.org")
                }

                Spacer()
            }
            .padding()
        }
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
