pipeline {
  agent any

  stages {
   stage('Build project image') {
    steps {
      script {
        dockerapp = docker.build("danieleleaoe/deploy-aws:${env.BUILD_ID}", "-f ./Dockerfile ./")
      }
    }
   }

   stage('Deploy image') {
    steps { 
      sh """
          docker run --name deploy-aws --env-file /etc/curso/env -p 3000:3000 -d -t danieleleaoe/deploy-aws:${env.BUILD_ID}
      """
    }
   }

  }
}