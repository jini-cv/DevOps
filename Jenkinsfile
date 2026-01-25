pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/jini-cv/auto-deploy-jini.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jini-auto-deploy .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker rm -f jini-app || true
                docker run -d -p 4000:4000 --name jini-app jini-auto-deploy
                '''
            }
        }
    }
}
