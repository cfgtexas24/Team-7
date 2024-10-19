//
//  LifeLessonsView.swift
//  CodeforGood
//
//  Created by Victor Cadena on 10/18/24.
//

import SwiftUI
import WebKit

//struct WebView: UIViewRepresentable {
//    let urlString: String
//
//    func makeUIView(context: Context) -> WKWebView {
//        return WKWebView()
//    }
//
//    func updateUIView(_ uiView: WKWebView, context: Context) {
//        if let url = URL(string: urlString) {
//            let request = URLRequest(url: url)
//            uiView.load(request)
//        }
//    }
//}

// ResourcesView struct where you display the videos
struct LifeLessonsView: View {
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
                
                Spacer()
            }
            .padding()
        }
    }
}

#Preview {
    LifeLessonsView()
}
