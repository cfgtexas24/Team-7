//
//  FormView.swift
//  CodeforGood
//
//  Created by Victor Cadena on 10/19/24.
//

import SwiftUI

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
            Spacer()
            
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

            // Show the "Next" button until the last question
            if currentQuestionIndex < questions.count - 1 {
                Button("Next") {
                    currentQuestionIndex += 1
                }
                .padding()
            } else {
                Button("Submit") {
                    handleSubmit()
                }
                .padding()
            }
        }
        .padding()
        .onAppear {
            // Initialize the form
            currentQuestionIndex = 0
        }
        .fullScreenCover(isPresented: $isFormCompleted) {
            HomeView() // Navigate to HomeView once form is completed
        }
    }

    // Function to handle the form submission
    private func handleSubmit() {
        if isEmergency {
            sendEmergencyEmail()
        }
        // Proceed to the HomeView
        isFormCompleted = true
    }

    // Function to send an emergency email automatically
    private func sendEmergencyEmail() {
        // Here you will need to integrate the JavaScript email sending code
        // You need to replace this with actual email sending implementation
        print("Sending emergency email to admin...")
        print("Emergency Type: \(selectedEmergencyType)")
        print("User Info: \(firstName) \(lastName), Email: \(email), Phone: \(phoneNumber)")
        print("Location: \(address), \(city), \(state), \(zipCode)")
        print("Additional Info: \(additionalInfo)")
    }
}
import SwiftUI

struct FormView_Previews: PreviewProvider {
    static var previews: some View {
        FormView()
            .previewDevice("iPhone 14 Pro") // Specify the device for the preview
    }
}

