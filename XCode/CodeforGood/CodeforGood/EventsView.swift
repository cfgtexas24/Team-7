//
//  EventsView.swift
//  CodeforGood
//
//  Created by Victor Cadena on 10/18/24.
//

import SwiftUI

struct EventsView: View {
    @State private var selectedLocation: String = "San Antonio" // Default location
    private let locations = ["Dallas", "Austin", "San Antonio"]
    
    var filteredEvents: [Event] {
        dummyEvents.filter { $0.location == selectedLocation }
    }
    
    var body: some View {
        VStack {
            // Location Picker
            Picker("Change Location", selection: $selectedLocation) {
                ForEach(locations, id: \.self) { location in
                    Text(location).tag(location)
                }
            }
            .padding(.top ,5)
            .padding(.leading, 250)
            .pickerStyle(MenuPickerStyle()) // Use menu picker style for better appearance
            

            // Scrollable list of events filtered by location - DFW, ATX, SATX
            ScrollView {
                VStack(spacing: 20) {
                    ForEach(filteredEvents) { event in
                        EventCard(event: event)
                    }
                }
                .padding()
            }
        }
    }
}

struct EventCard: View {
    let event: Event
    
    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: 5) {
                Text(event.name)
                    .font(.system(size: 18, weight: .bold)) // Custom size for event name
                    .padding(.bottom, 2)
                
                Text(event.address)
                    .font(.system(size: 14)) // Custom size for address
                    .foregroundColor(.secondary)
                
                Text(event.description)
                    .font(.system(size: 14)) // Custom size for description
                    .lineLimit(3)
            }
                    
                    Spacer()
                    
                    Text(event.time)
                        .font(.system(size: 14, weight: .medium)) // Customize font size
                        .foregroundColor(.primary)
                        .frame(width: 70, alignment: .trailing) // Slightly smaller width to allow overlap
                        .padding(.trailing, -30) // Negative padding to overlap into the event info area
                        .frame(width: 60) // Fixed width for consistent alignment
                        .lineLimit(1)
                }
                .padding()
                .frame(width: 350, height: 150) // Set a fixed size for the event card
                .background(Color.white)
                .cornerRadius(10)
                .shadow(color: Color.black.opacity(0.2), radius: 5, x: 0, y: 5)
            }
        }


struct Event: Identifiable {
    let id = UUID()
    let name: String
    let time: String
    let description: String
    let location: String // Location property to filter by
    let address: String
}

// Dummy Data for Demo
let dummyEvents = [
    // Dallas Events
    Event(name: "Career Development Seminar", time: "10:00 AM - 12:00 PM", description: "Learn how to build a strong resume and prepare for job interviews.", location: "Dallas", address: "123 Main St, Dallas, TX 75201"),
    Event(name: "Advanced Coding Workshop", time: "2:00 PM - 4:00 PM", description: "Enhance your coding skills with advanced programming techniques.", location: "Dallas", address: "456 Tech Blvd, Dallas, TX 75202"),
    Event(name: "Group Therapy Session", time: "5:00 PM - 6:30 PM", description: "Participate in a group therapy session to discuss mental health strategies.", location: "Dallas", address: "789 Wellness Way, Dallas, TX 75203"),
    Event(name: "Community Service Initiative", time: "8:00 AM - 11:00 AM", description: "Join us in a community cleanup and beautification project.", location: "Dallas", address: "321 Park Ave, Dallas, TX 75204"),
    Event(name: "Financial Empowerment Workshop", time: "1:00 PM - 3:00 PM", description: "Learn about budgeting, saving, and investing for a secure future.", location: "Dallas", address: "654 Finance St, Dallas, TX 75205"),
    Event(name: "Nutrition and Wellness Talk", time: "4:00 PM - 5:30 PM", description: "Discover ways to improve your diet and overall health.", location: "Dallas", address: "987 Health Rd, Dallas, TX 75206"),
    
    // Austin Events
    Event(name: "Tech Career Fair", time: "9:00 AM - 12:00 PM", description: "Explore job openings in the tech industry and network with companies.", location: "Austin", address: "123 Innovation Dr, Austin, TX 78701"),
    Event(name: "iOS App Development Workshop", time: "1:00 PM - 3:30 PM", description: "Learn to develop iOS apps using Swift and SwiftUI.", location: "Austin", address: "456 Code St, Austin, TX 78702"),
    Event(name: "Mindfulness Group Counseling", time: "4:00 PM - 5:30 PM", description: "Join a group session focused on mindfulness and stress management.", location: "Austin", address: "789 Calm Ave, Austin, TX 78703"),
    Event(name: "Community Food Drive", time: "7:00 AM - 11:00 AM", description: "Help collect and distribute food donations to local families.", location: "Austin", address: "321 Charity Ln, Austin, TX 78704"),
    Event(name: "Investment Basics Seminar", time: "2:00 PM - 4:00 PM", description: "Learn the fundamentals of investing and financial planning.", location: "Austin", address: "654 Wealth Rd, Austin, TX 78705"),
    Event(name: "Fitness and Nutrition Workshop", time: "6:00 PM - 7:30 PM", description: "Discover effective fitness routines and healthy eating habits.", location: "Austin", address: "987 Gym St, Austin, TX 78706"),
    
    // San Antonio Events
    Event(name: "Local Career Fair", time: "10:00 AM - 1:00 PM", description: "Meet local employers and explore career opportunities.", location: "San Antonio", address: "123 Commerce St, San Antonio, TX 78201"),
    Event(name: "Full-Stack Development Workshop", time: "1:30 PM - 4:30 PM", description: "Learn the basics of full-stack development with hands-on practice.", location: "San Antonio", address: "456 Dev Blvd, San Antonio, TX 78202"),
    Event(name: "Counseling for Coping Skills", time: "5:00 PM - 6:30 PM", description: "Participate in a session focusing on coping skills for daily stress.", location: "San Antonio", address: "789 Peace Ave, San Antonio, TX 78203"),
    Event(name: "Community Health Fair", time: "8:00 AM - 12:00 PM", description: "Get free health screenings and learn about local health resources.", location: "San Antonio", address: "321 Wellness Ln, San Antonio, TX 78204"),
    Event(name: "Financial Literacy 101", time: "3:00 PM - 5:00 PM", description: "Understand the basics of managing your finances and saving money.", location: "San Antonio", address: "654 Savings St, San Antonio, TX 78205"),
    Event(name: "Outdoor Yoga and Meditation", time: "6:30 PM - 8:00 PM", description: "Join us for an evening of yoga and guided meditation.", location: "San Antonio", address: "987 Relaxation Rd, San Antonio, TX 78206"),
]


#Preview {
    EventsView()
}
