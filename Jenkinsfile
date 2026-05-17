pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/sivamurugan22/nodejs-jenkins-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f node-container || true'
                sh 'docker run -d -p 3000:3000 --name node-container node-app'
            }
        }

    }
}
