const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../app');

const transferService = require('../../service/transferService');

describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        
        it('Quando informo remetente e destinatario inexistente recebo 400', async () => {
           //Mock
           const transferService = require('../../service/transferService');
           const transferServiceMock = sinon.stub(transferService, 'transfer');
           transferServiceMock.throws(new Error('Usuário não encontrado'));
           
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

            sinon.restore();
        });

        
        it('Quando informo valores válidos tenho sucesso com 201 CREATED', async () => {
           //Mock
           const transferService = require('../../service/transferService');
           const transferServiceMock = sinon.stub(transferService, 'transfer');
           transferServiceMock.returns({
                from: "natalia",
                to: "wesley",
                amount: 100,
                date: new Date().toISOString()
           });
           
            //abaixo diz que quer usar o supertest para fazer requisições na api (pq o app representa a api)
            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from: "natalia",
                    to: "wesley",
                    amount: 100
                    //Envia o que está no swagger
                });
            expect(resposta.status).to.equal(201);
            expect(resposta.body).to.have.property('from', 'natalia')
            expect(resposta.body).to.have.property('to', 'wesley')
            expect(resposta.body).to.have.property('amount', 100)

	    sinon.restore();
        });
    });
});