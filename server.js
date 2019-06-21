// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const https = require('https');
const http = require('http');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );           // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({        // to support URL-encoded bodies
  extended: true
}));

var mysql = require("mysql");
app.use(bodyParser.urlencoded({
    extended: true
}));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/cursowebhook', function(request, response) {
  
  var intentName = request.body.queryResult.intent.displayName;

/////////// SITE /////////////
  if (intentName == "faq.SiteFaculdade" ) {
    
    response.json({
      "fulfillmentMessages": [
              {
                "card": {
                  "title": "Faculdade Delta",
                  "subtitle": "Bem vindo a nossa faculdade, de aluno para aluno.",
                  "imageUri": "https://firebasestorage.googleapis.com/v0/b/universidade-bdc9a.appspot.com/o/Processo%20seletivo%2Fdelta-300x300-29.png?alt=media&token=ed607405-0f27-4adf-858b-755868408c0d",
                 "buttons": [
                   {
                     "text": "Site",
                     "postback": "http://faculdadedelta.edu.br/site/graduacao.php"
                   },
                   {
                     "text": "Facebook",
                     "postback": "https://www.facebook.com/faculdadedeltaoficial/"
                   },
                   {
                     "text": "Instagram",
                     "postback": "https://www.instagram.com/explore/locations/411929082276158/faculdade-delta/?hl=pt"
                   }

                 ]
                }
              },
              {
                "text" :{
                  "text": [
                      "Temos bastante coisas interessantes em nossas redes sociais, vamos lá dar uma conferida?"
                    ]
                  }
              }
      ]});
  }

/////////// CURSOS /////////////
  if (intentName == "curso.CiênciasContábeis" ) {
    
    response.json({
      "fulfillmentMessages": [
              {
                "card": {
                  "title": "Ciências Contábeis",
                  "subtitle": "A contabilidade desde a criação dos métodos das partidas dobradas vem evoluindo de tal forma que não é mais possível o profissional de contabilidade, apenas ter o conhecimento de Débito e Crédito, há sim a necessidade de ampliação dos conhecimentos nas diversas áreas do saber, pois o profissional do século atual tem que ser dinâmico para lidar com situações práticas e cientificas e estar em constante atualização não só na área contábil, mas também em outras áreas.",
                 "buttons": [
                   {
                     "text": "Leia mais",
                     "postback": "http://faculdadedelta.edu.br/site/cursos_ciencias_contabeis.php"
                   }
                 ]
                }
              }
      ]});
  } else if (intentName == "curso.Administração" ) {
    
    response.json({
      "fulfillmentMessages": [
              {
                "card": {
                  "title": "Administração",
                  "subtitle": "A Administração é a ciência social que estuda e sistematiza as práticas usadas para administrar. O termo \"administração\" significa direção, gerência. Ou seja, é o ato de administrar ou gerir negócios, pessoas ou recursos, com o objetivo de alcançar metas definidas.",
                 "buttons": [
                   {
                     "text": "Leia mais",
                     "postback": "http://faculdadedelta.edu.br/site/cursos_administracao.php"
                   }
                 ]
                }
              }
      ]});
  } else if (intentName == "curso.Pedagogia" ) {
    
    response.json({
      "fulfillmentMessages": [
              {
                "card": {
                  "title": "Pedagogia",
                  "subtitle": "A Pedagogia forma profissionais que trabalham com educação e aprendizagem. Existem duas principais áreas de atuação para pedagogos: o magistério e a administração escolar. Quem escolhe o magistério pode dar aulas para a educação infantil e primeiros anos do ensino fundamental.",
                 "buttons": [
                   {
                     "text": "Leia mais",
                     "postback": "http://faculdadedelta.edu.br/site/pedagogia.php"
                   }
                 ]
                }
              }
      ]});
  } else if (intentName == "curso.RH" ) {
    
    response.json({
      "fulfillmentMessages": [
              {
                "card": {
                  "title": "Tecnologia em Gestão de Recursos Humanos",
                  "subtitle": "Profissionais em gestão de recursos humanos são capacitados para gerir com eficiência os processos de Recursos Humanos, atuando em empresas de pequeno, médio e grande porte, sejam públicas ou privadas, e também como consultoria empresarial.",
                 "buttons": [
                   {
                     "text": "Leia mais",
                     "postback": "http://faculdadedelta.edu.br/site/tecnologia_gestao_recursos_humanos.php"
                   }
                 ]
                }
              }
      ]});
  } else if (intentName == "curso.SI" ) {
    
    response.json({
      "fulfillmentMessages": [
              {
                "card": {
                  "title": "Sistemas de Informação",
                  "subtitle": "É sabido pela maioria das pessoas que, dificilmente alguém nos dias de hoje, conseguiria arrumar um bom emprego, sem saber lidar com um computador e com a informática de forma geral. Diante desta situação a Faculdade Delta oferece para a comunidade um curso de sistema de informação que vem suprir a maioria das necessidades do mercado de trabalho. Dando aos estudantes condições de conhecimentos que permite o ingresso destes no mercado de trabalho, já no segundo período do curso.",
                 "buttons": [
                   {
                     "text": "Leia mais",
                     "postback": "http://faculdadedelta.edu.br/site/cursos_sistemas_informacao.php"
                   }
                 ]
                }
              }
      ]});
  } else if (intentName == "curso.Tec-GestãoAmbiental" ) {
    
    response.json({
      "fulfillmentMessages": [
              {
                "card": {
                  "title": "Tecnologia em Gestão Ambiental",
                  "subtitle": "Gestão ambiental é uma disciplina derivada da agronomia trantando sobre a administração do exercício de atividades econômicas e sociais de forma a utilizar de maneira racional os recursos naturais, visando à sustentabilidade. Fazem parte do arcabouço de conhecimentos associados à gestão ambiental técnicas para a recuperação de áreas degradadas, técnicas de reflorestamento, métodos para a exploração sustentável de recursos naturais, de consumo e produção sustentáveis, o planejamento participativo, gestão de stakeholders, e o estudo de riscos e impactos ambientais para a avaliação de novos empreendimentos ou ampliação de atividades produtivas.",
                 "buttons": [
                   {
                     "text": "Leia mais",
                     "postback": "http://faculdadedelta.edu.br/site/cursos_tecnologia_gestao_ambiental.php"
                   }
                 ]
                }
              }
      ]});
  }
  
/////////// BIBLIOTECA /////////////
/*
  if (intentName == "faq.biblioteca" ) 
  
   response.json({
      "fulfillmentMessages": [
              {
                "card": {
                  "title": " ",
                  "subtitle": "A Biblioteca fica localizada no prédio da biblioteca e funciona segunda a sexta das 14:00 às 22:00 e sábado das 8:00 às 12:00. \nVocê também pode acessar os PDFs disponibilizados pela biblioteca.\nTelefone: (62)3086-4408\nEmail : biblioteca@faculdadedelta.edu.br",
                 "buttons": [
                   {
                     "text": "Biblioteca virtual",
                     "postback": "http://faculdadedelta.edu.br/site/biblioteca_index.php"
                   }
                 ]
                }
              }
      ]});
*/
  
/////////// História /////////////
  if (intentName == "faq.historia" ) 
  
   response.json({
      "fulfillmentMessages": [
              {
                "card": {
                  "title": " ",
                  "subtitle": "O Centro Tecnológico Delta Ltda. constitui-se numa Instituição de Ensino Superior, de caráter privado, em 25 de outubro de 2005, no município de Goiânia, com o objetivo de elevar o nível cultural e profissional da região, ministrando o ensino superior em seus variados níveis do conhecimento, investindo em pesquisa e extensão por meio de sua unidade, a Faculdade Delta.\n\nSeu projeto educacional conta com o apoio do Colégio Delta, que atua há 25 anos em Goiânia no Ensino Fundamental e Médio.\n\nA FACULDADE DELTA foi credenciada e autorizada pelo MEC através da PORTARIA-MEC 1.082, de 21 de novembro de 2007.",
                 "buttons": [
                   {
                     "text": "Saiba mais",
                     "postback": "http://faculdadedelta.edu.br/site/institucional.php"
                   }
                 ]
                }
              }
      ]});

//////////// XINGAMENTO ///////////
   if (intentName == "off.xingamento" ) {

      response.json({
        "fulfillmentMessages": [
                {
                  "image" :{
                    "imageUri": "https://firebasestorage.googleapis.com/v0/b/universidade-bdc9a.appspot.com/o/puto.png?alt=media&token=5ada5c1d-f9ce-4169-9f08-5b0378c0f979"
                    }
                }
        ]});
    }

//////////// CALCULADORA ///////////
   if (intentName == "skill.FazerConta" ) {
   
      var num1 = parseFloat(request.body.queryResult.parameters['num1']);
      var num2 = parseFloat(request.body.queryResult.parameters['num2']);
      var calculo = request.body.queryResult.parameters['calculo'];
     
     if (calculo == '+') {
        var resultado = num1 + num2;
        response.json({"fulfillmentText" : resultado });
     } else if (calculo == '-') {
        var resultado = num1 - num2;
        response.json({"fulfillmentText" : resultado });
     } else if (calculo == '*') {
        var resultado = num1 * num2;
        response.json({"fulfillmentText" : resultado });
     } else if (calculo == '/') {
        var resultado = num1 / num2;
        response.json({"fulfillmentText" : resultado });
     } else if (calculo == '%') {
        var resultado = num1 % num2;
        response.json({"fulfillmentText" : resultado });
     } else if (calculo == '^') {
        var resultado = Math.pow(num1, num2);
        response.json({"fulfillmentText" : resultado });
     } else if (calculo == 'raiz' || calculo == 'raíz quadrada' || calculo == 'raiz quadrada') {
        var resultado = Math.sqrt(num1);
        response.json({"fulfillmentText" : resultado });
     } else if (calculo == 'binario' || calculo == 'binário') {
        var resultado = Number(num1).toString(2);
        response.json({"fulfillmentText" : resultado });
     }
  }

//////////// WIKIPEDIA ///////////
   if (intentName == "skill.SearchWikipedia" ) {
       const wikiPediaApiHost = 'https://pt.wikipedia.org/w/api.php?'; //https://www.mediawiki.org/wiki/API:Opensearch

       if (request.body.queryResult.parameters['wikisearchterm']) {
         var searchTerm = request.body.queryResult.parameters['wikisearchterm'];
         callWikiPediaApi(searchTerm)
            .then((output) => {
               let displayText = `Não consegui achar nenhum resultado para: ${searchTerm}`;
               let result;
               if (output[2].length == 1) {
                  let telegramText = htmlEntities(`Aqui está o que eu achei na wikipédia sobre *${output[1][0]}*:\n${output[2][0]} \n\n Leia mais em [WikiPedia](${output[3][0]})`);
                  result = response.json({"payload": { "telegram": { "text": telegramText, "parse_mode": "markdown" }}});
               }
               response.setHeader('Content-Type', 'application/json');
               if (result) {
                 response.json({"fulfillmentText" : result });
               }
               else {
                  response.json({"fulfillmentText" : displayText });
               }
              });
      }

    function callWikiPediaApi(searchTerm, format = "json", action = "opensearch", limit = 1, profile = "fuzzy") {
        return new Promise((resolve, reject) => {
            let url = `${wikiPediaApiHost}&format=${format}&action=${action}&limit=${limit}&profile=${profile}&search=${searchTerm}`;
            https.get(url, (response) => {
                let body = '';
                response.on('data', (d) => body += d);
                response.on('end', () => {
                    let jO = JSON.parse(body);
                    resolve(jO);
                });
                response.on('error', (error) => {
                    reject(error);
                });
            });
        });
    }

    function htmlEntities(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
};
  
/////////// SUGESTÕES /////////////
  var connection = mysql.createConnection({
     host      : process.env.MYSQL_HOST,
     user      : process.env.MYSQL_USER,
     password  : process.env.MYSQL_PASS,
     database  : process.env.MYSQL_DB           
  });
  
  connection.connect();
           
    if (intentName == 'geral.sugestões') {
        console.log('incluir')  
      
        var opiniao  = request.body.queryResult.parameters['opiniao'];

        var query = 'insert into sugestoes values ("'+opiniao+'")';

        connection.query(query, function (error, results, fields) {
           if (error) throw error;
           connection.end();
           response.json({"fulfillmentText" :"Sua opinião foi inserida com sucesso!" })
        }); 
  } 
  
/////////// CONTATOS /////////////
/*  var connection = mysql.createConnection({
     host      : process.env.MYSQL_HOST,
     user      : process.env.MYSQL_USER,
     password  : process.env.MYSQL_PASS,
     database  : process.env.MYSQL_DB           
  });
  
  connection.connect();
           
    if (intentName == 'incluir.contatos') {
        console.log('incluir')  

        var numero_contato = request.body.queryResult.parameters['numero-contato'];
        var nome_contato   = request.body.queryResult.parameters['nome-contato'];
        var email_contato  = request.body.queryResult.parameters['email-contato'];

        var query = 'insert into contatos values ("'+numero_contato+'","'+nome_contato+'","'+email_contato+'")';

        connection.query(query, function (error, results, fields) {
           if (error) throw error;
           connection.end();
           response.json({"fulfillmentText" :"Contato inserido com sucesso!" })
        }); 
  
  } else if (intentName == 'atualizar.contatos') {
        console.log('atualizar')

        var numero_contato = request.body.queryResult.parameters['numero-contato'];

        var query = 'select * from contatos where telefone = "'+numero_contato+'"';

        connection.query(query, function (error, results, fields) {
           if (error) throw error;
           connection.end();
           response.json({"fulfillmentText" :"Quer alterar - "+results[0].nome+", "+results[0].email+"?" })
        }); 
    
  } else if (intentName == 'apagar.contatos') {
        console.log('apagar')

        var numero_contato = request.body.queryResult.parameters['numero-contato'];       
        var query = 'delete from contatos where telefone = "'+numero_contato+'"';

        connection.query(query, function (error, results, fields) {
           if (error) throw error;
           connection.end();
           response.json({"fulfillmentText" :"Contato apagado com sucesso!" })
        }); 
    
  } else if (intentName == 'pesquisar.contatos') {
        console.log('pesquisar')

        var nome_contato   = request.body.queryResult.parameters['nome-contato'];
        var query = 'select * from contatos where nome = "'+nome_contato+'"';

        connection.query(query, function (error, results, fields) {
           if (error) throw error;
           connection.end();
           var contato =  '';
           contato = 'Número: '+results[0].telefone+'\nNome: '+results[0].nome+'\nEmail: '+results[0].email;
           response.json({"fulfillmentText" : contato })
        }) ;
  } else if (intentName == 'atualizar.contatos - yes')  {
        console.log("atualizar-yes");

        var numero_contato = request.body.queryResult.outputContexts[0].parameters['numero-contato'];
        var nome_contato   = request.body.queryResult.parameters['nome-contato'];
        var email_contato  = request.body.queryResult.parameters['email-contato'];

        var query = 'update contatos set nome = "'+nome_contato+'",email = "'+email_contato+'" where telefone = "'+numero_contato+'"';

        connection.query(query, function (error, results, fields) {
           if (error) throw error;
           connection.end();
           response.json({"fulfillmentText" :"Contato alterado!" })
        }); 
  }
*/
  
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});