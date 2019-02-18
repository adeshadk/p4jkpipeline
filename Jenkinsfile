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
}
}