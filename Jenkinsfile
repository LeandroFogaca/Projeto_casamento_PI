pipeline {
    agent {
        label 'ec2-univesp'
    }
    options {
        disableConcurrentBuilds()
        parallelsAlwaysFailFast()
        timeout(time: 1, unit: 'HOURS')
    }
    stages {
        stage("Deploy") { steps { script {
            sh """
                docker-compose build --no-cache
                docker-compose down
                docker-compose up -d
            """
        } } }
    }
}
