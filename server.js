    const express = require('express')
    const nunjucks = require('nunjucks')

    const server = express()
    const videos = require("./data")

    server.use(express.static('public'))

    server.set('view engine', 'njk')

    nunjucks.configure('views', {
        express: server,
        autoescape: false,
        noCache: true
        
    })

    server.get('/', function(req, res){
        const about = {
            avatar_url: `https://avatars.githubusercontent.com/u/66525064?s=460&v=4"`,
            name: `Lucas Baron `,
            role: ` Aluno <a href="https://rocketseat.com.br/" target="_blank"> Rocketseat </a>`,
            description: `Estudante de Desenvolvimento Web `,
            links:[
                {name: `Github`, url:`https://github.com/Lucas-Baron" target="_blank`},
                {name: `Lnkedin`, url:`https://www.linkedin.com/in/lucas-baron-/" target="_blank`}
            ]
        }

        return res.render("about", {about})
    })

    server.get('/portifolio', function(req, res){
        return res.render('portifolio', { items:videos })
    })

    server.get('/video', function(req, res){
        const id = req.query.id

        const video = videos.find(function(video){
            return video.id == id
        })

        if (!video){
            return res.send('Video not found!')
        }

        return res.render('video', {item:video})
    })

    server.listen(5000, function(){
        console.log('Server is running')
    })