pipeline
{
agent any
stages{
        stage('Stop & Remove Existing Docker Containers'){
                steps{
                    sh 'docker stop $(docker ps -q --filter "ancestor=adeshadk/sl_project4") || true' 
                    sh 'docker rm $(docker ps -aq --filter "ancestor=adeshadk/sl_project4") || true'
                }
            }
        stage('Build Docker Image'){
                steps{
                    sh 'docker build -t adeshadk/sl_project4 . '                     
                }
            }
        stage('Push Docker Image'){
                steps{
                   withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh 'docker push adeshadk/sl_project4:latest'
                    }                     
                }
            }


    }
}