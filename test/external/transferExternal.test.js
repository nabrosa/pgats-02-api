const request = require('supertest');
const { expect } = require('chai');

describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        
        it('Quando informo remetente e destinatario inexistente recebo 400', async () => {
           const resposta = await request("http://localhost:3000")
                .post('/transfer')
                .send({
                    from: "Natalia",
                    to: "Wesley",
                    amount: 100
                    //Envia o que está no swagger
                });
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário não encontrado')

        });
    });
});