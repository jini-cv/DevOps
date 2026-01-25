pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/jini-cv/auto-deploy-jini.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t auto-deploy-jini .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker rm -f auto-deploy-jini || true
                docker run -d -p 4000:4000 --name auto-deploy-jini auto-deploy-jini
                '''
            }
        }
    }
}
