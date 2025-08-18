const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../app');

describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        it('Quando informo remetente e destinatario inexistente recebo 400', async () => {
            //abaixo diz que quer usar o supertest para fazer requisições na api (pq o app representa a api)
            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from: "natalia",
                    to: "wesley",
                    amount: 100
                    //Envia o que está no swagger
                });
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário não encontrado')
        });
    });
});