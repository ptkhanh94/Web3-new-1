class ComplexWebFramework {
    constructor(name) {
        this.name = name;
        this.dependencies = [];
    }

    addDependency(dependency) {
        this.dependencies.push(dependency);
    }

    listDependencies() {
        console.log(`Dependencies for ${this.name}:`);
        this.dependencies.forEach(dependency => {
            console.log(dependency);
        });
    }

    addFeature(feature) {
        console.log(`Adding feature: ${feature}`);
    }

    addUtility(utility) {
        console.log(`Adding utility: ${utility}`);
    }

    deploy() {
        console.log(`Deploying ${this.name}...`);
    }
}

// Tạo một đối tượng ComplexWebFramework
const complexFramework = new ComplexWebFramework("ComplexWebFramework");

// Thêm các Dependents
complexFramework.addDependency("Express.js");
complexFramework.addDependency("Socket.io");
complexFramework.addDependency("MongoDB");

// Thêm các tính năng
complexFramework.addFeature("User Authentication");
complexFramework.addFeature("Real-time Communication");
complexFramework.addFeature("Database Integration");

// Thêm các tiện ích
complexFramework.addUtility("Error Handling Middleware");
complexFramework.addUtility("Logging Mechanism");

// Liệt kê các Dependents
complexFramework.listDependencies();

// Triển khai
complexFramework.deploy();
