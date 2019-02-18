pipeline
{
agent any
stages{
        stage('Stop Existing Containers'){
                steps{
                    sh 'docker stop $(docker ps -q --filter "ancestor=adeshadk/sl_project4") || true'                    
                }
            }
         stage('Remove Existing Containers'){
                steps{
                    sh 'docker rm $(docker ps -aq --filter "ancestor=adeshadk/sl_project4") || true'
                }
            }    
        stage('Build Image'){
                steps{
                    sh 'docker build -t adeshadk/sl_project4 . '                     
                }
            }
        stage('Push Image'){
                steps{
                   withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh 'docker push adeshadk/sl_project4:latest'
                    }                     
                }
            }
        stage('Pull Image'){
                steps{
                   withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh 'docker pull adeshadk/sl_project4:latest'
                    }                     
                }
            }
        stage('Run App Container'){
                steps{
                  sh 'docker run  -d -p 8081:8081 --name project4nodejs adeshadk/sl_project4'                  
                }
            }
         stage('Test App'){
             agent {
                 docker { 
                     label 'project4nodejs'
                 }
             }
                steps{
                  sh 'npm test'                  
                }
            }

    }
}