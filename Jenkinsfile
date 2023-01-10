pipeline {
  agent any

  stages {
   stage('Build project image') {
    steps {
      script {
        dockerapp = docker.build("danieleleaoe/deploy-aws", "-f ./Dockerfile ./")
      }
    }
   }
  }
}