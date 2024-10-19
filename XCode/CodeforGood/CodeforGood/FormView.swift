//
//  FormView.swift
//  CodeforGood
//
//  Created by Victor Cadena on 10/19/24.
//

import SwiftUI
import Foundation
import SwiftSMTP

struct FormView: View {
    @State private var currentQuestionIndex = 0
    @State private var isEmergency = false
    @State private var selectedEmergencyType = ""
    @State private var firstName = ""
    @State private var lastName = ""
    @State private var email = ""
    @State private var phoneNumber = ""
    @State private var age = ""
    @State private var gender = ""
    @State private var address = ""
    @State private var city = ""
    @State private var state = ""
    @State private var zipCode = ""
    @State private var additionalInfo = ""
    @State private var isPickerVisible = false
    
    @State private var isFormCompleted = false

    let emergencyOptions = ["Homeless", "Sleeping in Car", "No Parent/Guardian"]
    let questions = [
        "What is the emergency?",
        "First Name",
        "Last Name",
        "Email",
        "Phone Number",
        "Age",
        "Gender",
        "Address",
        "City",
        "State",
        "Zip Code",
        "Additional Information"
    ]

    var body: some View {
        VStack {
            // Company Logo
            Image("Storm_Center_of_Hope_and_Service_Logo_NoBackground") // Replace "CompanyLogo" with the actual image name in your assets
                .resizable()
                .scaledToFit()
                .frame(width: 300, height: 300)
            
            
            // Display the current question in the center
            Group {
                if currentQuestionIndex == 0 {
                    Text("What is the emergency?")
                        .font(.headline)
                        .padding()
                    
                    Button(action: {
                        isPickerVisible = true
                    }) {
                        Text(selectedEmergencyType.isEmpty ? "Select Emergency Type" : selectedEmergencyType)
                            .font(.title2)
                            .foregroundColor(.white)
                            .padding()
                            .frame(maxWidth: .infinity)
                            .background(Color.blue)
                            .cornerRadius(10)
                    }
                    .padding()
                    .sheet(isPresented: $isPickerVisible) {
                        VStack {
                            Text("Select Emergency Type")
                                .font(.headline)
                                .padding()
                            
                            Picker("Emergency Type", selection: $selectedEmergencyType) {
                                ForEach(emergencyOptions, id: \.self) { emergency in
                                    Text(emergency).tag(emergency)
                                }
                            }
                            .pickerStyle(WheelPickerStyle())
                            .padding()
                            
                            Button("Done") {
                                isPickerVisible = false
                                if !selectedEmergencyType.isEmpty {
                                    isEmergency = true
                                    currentQuestionIndex += 1
                                }
                            }
                            .padding()
                            .background(Color.blue)
                            .foregroundColor(.white)
                            .cornerRadius(10)
                        }
                        .padding()
                    }
                    
                    // No Emergency button
                    Button(action: {
                        isEmergency = false
                        currentQuestionIndex += 1
                    }) {
                        Text("No Emergency")
                            .font(.title2)
                            .foregroundColor(.white)
                            .padding()
                            .frame(maxWidth: .infinity)
                            .background(Color.green)
                            .cornerRadius(10)
                    }
                    .padding()
                } else if currentQuestionIndex == 1 {
                    TextField("First Name", text: $firstName)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding()
                        .onSubmit { // Detect Enter key press
                                        currentQuestionIndex += 1
                                    }
                } else if currentQuestionIndex == 2 {
                    TextField("Last Name", text: $lastName)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding()
                        .onSubmit { // Detect Enter key press
                                        currentQuestionIndex += 1
                                    }
                } else if currentQuestionIndex == 3 {
                    TextField("Email", text: $email)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding()
                        .onSubmit { // Detect Enter key press
                                        currentQuestionIndex += 1
                                    }
                } else if currentQuestionIndex == 4 {
                    TextField("Phone Number", text: $phoneNumber)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding()
                        .onSubmit { // Detect Enter key press
                                        currentQuestionIndex += 1
                                    }
                } else if currentQuestionIndex == 5 {
                    TextField("Age", text: $age)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding()
                        .onSubmit { // Detect Enter key press
                                        currentQuestionIndex += 1
                                    }
                } else if currentQuestionIndex == 6 {
                    TextField("Gender", text: $gender)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding()
                        .onSubmit { // Detect Enter key press
                                        currentQuestionIndex += 1
                                    }
                } else if currentQuestionIndex == 7 {
                    TextField("Address", text: $address)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding()
                        .onSubmit { // Detect Enter key press
                                        currentQuestionIndex += 1
                                    }
                } else if currentQuestionIndex == 8 {
                    TextField("City", text: $city)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding()
                        .onSubmit { // Detect Enter key press
                                        currentQuestionIndex += 1
                                    }
                } else if currentQuestionIndex == 9 {
                    TextField("State", text: $state)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding()
                        .onSubmit { // Detect Enter key press
                                        currentQuestionIndex += 1
                                    }
                } else if currentQuestionIndex == 10 {
                    TextField("Zip Code", text: $zipCode)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding()
                        .onSubmit { // Detect Enter key press
                                        currentQuestionIndex += 1
                                    }
                } else if currentQuestionIndex == 11 {
                    TextField("Additional Information", text: $additionalInfo)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding()
                        .onSubmit { // Detect Enter key press
                                        currentQuestionIndex += 1
                                    }
                }
            }

            Spacer()

//            ***** Removed for Demo Simplicity *****
//            // Show the "Next" button until the last question
//            if currentQuestionIndex < questions.count - 1 {
//                Button("Next") {
//                    currentQuestionIndex += 1
//                }
//                .padding()
//            } else {
//                Button("Submit") {
//                    handleSubmit()
//                }
//                .padding()
//            }
//        }
//        .padding()
//        .onAppear {
//
//            // Initialize the form
//            currentQuestionIndex = 0
        }
        .fullScreenCover(isPresented: $isFormCompleted) {
            HomeView() // Navigate to HomeView once form is completed
        }
    }

    // Function to send an emergency email automatically
    private func handleSubmit() {
            // Save user data to UserDefaults
            UserDefaults.standard.setValue(firstName, forKey: "firstName")
            UserDefaults.standard.setValue(lastName, forKey: "lastName")
            UserDefaults.standard.setValue(email, forKey: "email")
            UserDefaults.standard.setValue(phoneNumber, forKey: "phoneNumber")
            UserDefaults.standard.setValue(age, forKey: "age")
            UserDefaults.standard.setValue(gender, forKey: "gender")
            UserDefaults.standard.setValue(address, forKey: "address")
            UserDefaults.standard.setValue(city, forKey: "city")
            UserDefaults.standard.setValue(state, forKey: "state")
            UserDefaults.standard.setValue(zipCode, forKey: "zipCode")
            UserDefaults.standard.setValue(additionalInfo, forKey: "additionalInfo")
            
            if isEmergency {
                sendEmergencyEmail()
            }
            isFormCompleted = true
        }

    }

struct FormView_Previews: PreviewProvider {
    static var previews: some View {
        FormView()
            .previewDevice("iPhone 15 Pro") // Specify the device for the preview
    }
}

    extension FormView {
        private func sendEmergencyEmail() {
            // In your FormsView or a related class
            func sendEmergencyEmail() {
                // The URL for the SMS API endpoint
                guard let url = URL(string: "http://52.91.214.247:3000/api/sms") else {
                    print("Invalid URL")
                    return
                }

                // Create a URLSession data task to send a GET request
                let task = URLSession.shared.dataTask(with: url) { data, response, error in
                    // Handle errors
                    if let error = error {
                        print("Failed to send request: \(error.localizedDescription)")
                        return
                    }

                    // Check for a valid HTTP response
                    if let httpResponse = response as? HTTPURLResponse {
                        if httpResponse.statusCode == 200 {
                            // Successful response
                            print("SMS request sent successfully.")
                        } else {
                            // Handle unexpected status codes
                            print("Received HTTP status code: \(httpResponse.statusCode)")
                        }
                    }

                    // Optionally, handle the response data
                    if let data = data, let responseString = String(data: data, encoding: .utf8) {
                        print("Response data: \(responseString)")
                    }
                }

                // Start the data task
                task.resume()
            }
        }
    }
