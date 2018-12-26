module.exports = {
    apps: [{
        name: 'njs-ahp',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-35-174-116-172.compute-1.amazonaws.com',
            key: 'C:/Users/Clint/Desktop/clsulliKey.pem',
            ref: 'origin/master',
            repo: 'git@github.com:clsulli/njs-ahp.git',
            path: '/home/ubuntu/ahp',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}