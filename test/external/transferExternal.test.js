const request = require('supertest');
const { expect } = require('chai');

describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        
        it('Quando informo remetente e destinatario inexistente recebo 400 via http', async () => {
           //Capturar o token
           const respostaLogin = await request("http://localhost:3001")
                .post('/login')
                .send({
                    username: "natalia",
                    password: "123456"
                });
            
                const token = respostaLogin.body.token;
                
                
            //Realizar a transferência
            const resposta = await request("http://localhost:3001")
                .post('/transfer')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    from: "natalia",
                    to: "arthur",
                    amount: 100
                    //Envia o que está no swagger
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário não encontrado')

            
        });
    });
});