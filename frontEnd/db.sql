CREATE DATABASE restaurant;

USE restaurant;

CREATE TABLE Users (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(20),
    description TEXT
);


CREATE TABLE Categories (
    categoryId INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


CREATE TABLE Dishes (
    dishId INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    orderPerWeek INT DEFAULT 0,
    imagePath VARCHAR(255),
    description TEXT,
    categoryId INT,
    FOREIGN KEY (categoryId) REFERENCES Categories(categoryId)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);


CREATE TABLE Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    orderDate DATETIME NOT NULL,
    isDelivered BOOLEAN DEFAULT FALSE,
    dishId INT,
    userId INT,
    FOREIGN KEY (dishId) REFERENCES Dishes(dishId)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(userId)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


CREATE TABLE Booking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bookingDate DATETIME NOT NULL,
    name VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(20),
    personsNumber INT NOT NULL,
    tableNumber INT NOT NULL,
    userId INT,
    FOREIGN KEY (userId) REFERENCES Users(userId)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);