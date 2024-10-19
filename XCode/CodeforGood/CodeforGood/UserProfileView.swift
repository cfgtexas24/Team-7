//
//  UserProfileView.swift
//  CodeforGood
//
//  Created by Victor Cadena on 10/18/24.
//

import SwiftUI
import PhotosUI

struct UserProfileView: View {
    @State private var isEditing: Bool = false
    @State private var firstName: String = UserDefaults.standard.string(forKey: "firstName") ?? ""
    @State private var lastName: String = UserDefaults.standard.string(forKey: "lastName") ?? ""
    @State private var email: String = UserDefaults.standard.string(forKey: "email") ?? ""
    @State private var phoneNumber: String = UserDefaults.standard.string(forKey: "phoneNumber") ?? ""
    @State private var age: String = UserDefaults.standard.string(forKey: "age") ?? ""
    @State private var gender: String = UserDefaults.standard.string(forKey: "gender") ?? ""
    @State private var address: String = UserDefaults.standard.string(forKey: "address") ?? ""
    @State private var city: String = UserDefaults.standard.string(forKey: "city") ?? ""
    @State private var state: String = UserDefaults.standard.string(forKey: "state") ?? ""
    @State private var zipCode: String = UserDefaults.standard.string(forKey: "zipCode") ?? ""
    @State private var additionalInfo: String = UserDefaults.standard.string(forKey: "additionalInfo") ?? ""
    @State private var profileImage: UIImage? = UserProfileView.loadProfileImage()
    @State private var showingImagePicker = false

    var body: some View {
        ScrollView {
            VStack(spacing: 20) {
                // Profile Picture
                VStack {
                    if let profileImage = profileImage {
                        Image(uiImage: profileImage)
                            .resizable()
                            .frame(width: 100, height: 100)
                            .clipShape(Circle())
                            .padding()
                    } else {
                        Image(systemName: "person.crop.circle.fill")
                            .resizable()
                            .frame(width: 100, height: 100)
                            .foregroundColor(.gray)
                            .padding()
                    }
                    
                    Button(action: {
                        showingImagePicker = true
                    }) {
                        Text("Add Profile Photo")
                            .font(.caption)
                            .foregroundColor(.blue)
                    }
                }
                
                // User Info Fields
                VStack(alignment: .leading, spacing: 15) {
                    // Edit and Save Button
                    HStack {
                        Button(action: {
                            isEditing.toggle()
                        }) {
                            Text(isEditing ? "Done" : "Edit")
                                .font(.headline)
                                .foregroundColor(.blue)
                        }
                        Spacer()
                    }
                    
                    // First Name and Last Name
                    HStack {
                        TextField("First Name", text: $firstName)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .disabled(!isEditing)
                            .onChange(of: firstName, perform: { newValue in
                                UserDefaults.standard.setValue(newValue, forKey: "firstName")
                            })
                        
                        TextField("Last Name", text: $lastName)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .disabled(!isEditing)
                            .onChange(of: lastName, perform: { newValue in
                                UserDefaults.standard.setValue(newValue, forKey: "lastName")
                            })
                    }
                    
                    // Email
                    TextField("E-mail", text: $email)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .disabled(!isEditing)
                        .onChange(of: email, perform: { newValue in
                            UserDefaults.standard.setValue(newValue, forKey: "email")
                        })
                    
                    // Phone Number
                    TextField("Phone Number", text: $phoneNumber)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .disabled(!isEditing)
                        .onChange(of: phoneNumber, perform: { newValue in
                            UserDefaults.standard.setValue(newValue, forKey: "phoneNumber")
                        })
                    
                    // Address
                    TextField("Address", text: $address)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .disabled(!isEditing)
                        .onChange(of: address, perform: { newValue in
                            UserDefaults.standard.setValue(newValue, forKey: "address")
                        })
                    
                    // State and Zip Code
                    HStack {
                        TextField("State", text: $state)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .disabled(!isEditing)
                            .onChange(of: state, perform: { newValue in
                                UserDefaults.standard.setValue(newValue, forKey: "state")
                            })
                        
                        TextField("Zip Code", text: $zipCode)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .disabled(!isEditing)
                            .onChange(of: zipCode, perform: { newValue in
                                UserDefaults.standard.setValue(newValue, forKey: "zipCode")
                            })
                    }
                }
                .padding(.horizontal)
                
                // Delete Profile Button
                Button(action: {
                    deleteUserInfo()
                }) {
                    Text("Delete Profile")
                        .foregroundColor(.red)
                }
                .padding(.top, 30)
                
                Spacer()
            }
            .padding()
        }
        .navigationBarTitleDisplayMode(.inline)
        .sheet(isPresented: $showingImagePicker) {
            ImagePicker(profileImage: $profileImage, onImagePicked: { image in
                self.profileImage = image
                UserProfileView.saveProfileImage(image) // Save the image whenever a new one is picked
            })
        }
        .onAppear {
            // Load the profile image whenever the view appears
            self.profileImage = UserProfileView.loadProfileImage()
        }
    }

    // Load profile image from the device
    private static func loadProfileImage() -> UIImage? {
        let url = getProfileImageURL()
        if let imageData = try? Data(contentsOf: url) {
            return UIImage(data: imageData)
        }
        return nil
    }
    
    // Save profile image to the device
    private static func saveProfileImage(_ image: UIImage) {
        if let imageData = image.jpegData(compressionQuality: 0.8) {
            let url = getProfileImageURL()
            try? imageData.write(to: url)
        }
    }

    // Get the URL for the profile image file
    private static func getProfileImageURL() -> URL {
        let fileManager = FileManager.default
        let directory = fileManager.urls(for: .documentDirectory, in: .userDomainMask).first!
        return directory.appendingPathComponent("profileImage.jpg")
    }


    // Delete user information from UserDefaults
    private func deleteUserInfo() {
        UserDefaults.standard.removeObject(forKey: "firstName")
        UserDefaults.standard.removeObject(forKey: "lastName")
        UserDefaults.standard.removeObject(forKey: "email")
        UserDefaults.standard.removeObject(forKey: "phoneNumber")
        UserDefaults.standard.removeObject(forKey: "address")
        UserDefaults.standard.removeObject(forKey: "state")
        UserDefaults.standard.removeObject(forKey: "zipCode")
        firstName = ""
        lastName = ""
        email = ""
        phoneNumber = ""
        address = ""
        state = ""
        zipCode = ""
        profileImage = nil
        UserProfileView.deleteProfileImage()
    }
    
    // Delete the profile image file
    private static func deleteProfileImage() {
        let url = getProfileImageURL()
        try? FileManager.default.removeItem(at: url)
    }
}

// Image Picker using PHPickerViewController
struct ImagePicker: UIViewControllerRepresentable {
    @Binding var profileImage: UIImage?
    var onImagePicked: (UIImage) -> Void = { _ in }
    
    func makeUIViewController(context: Context) -> PHPickerViewController {
        var configuration = PHPickerConfiguration()
        configuration.filter = .images
        configuration.selectionLimit = 1
        
        let picker = PHPickerViewController(configuration: configuration)
        picker.delegate = context.coordinator
        return picker
    }

    func updateUIViewController(_ uiViewController: PHPickerViewController, context: Context) {}

    func makeCoordinator() -> Coordinator {
        Coordinator(self, onImagePicked: onImagePicked)
    }

    class Coordinator: NSObject, PHPickerViewControllerDelegate {
        let parent: ImagePicker
        let onImagePicked: (UIImage) -> Void

        init(_ parent: ImagePicker, onImagePicked: @escaping (UIImage) -> Void) {
            self.parent = parent
            self.onImagePicked = onImagePicked
        }

        func picker(_ picker: PHPickerViewController, didFinishPicking results: [PHPickerResult]) {
            picker.dismiss(animated: true)
            
            guard let provider = results.first?.itemProvider else { return }
            
            if provider.canLoadObject(ofClass: UIImage.self) {
                provider.loadObject(ofClass: UIImage.self) { (image, error) in
                    DispatchQueue.main.async {
                        if let image = image as? UIImage {
                            self.parent.profileImage = image
                            self.onImagePicked(image)
                        }
                    }
                }
            }
        }
    }
}
struct UserProfileView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            UserProfileView()
        }
    }
}

