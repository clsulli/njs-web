module.exports = {
    apps: [{
        name: 'njs-ahp',
        script: './index.js'
    }],
    deploy: {
        user: 'ubuntu',
        host: 'http://ec2-35-174-116-172.compute-1.amazonaws.com',
        key: 'C:/Users/Clint/Desktop/clsulliKey.pem',
        ref: 'origin/master',
        repo: 'https://github.com/clsulli/njs-web.git',
        path: '/home/ubuntu/',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
}