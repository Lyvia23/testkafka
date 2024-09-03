const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'user-service',
    brokers: ['localhost:9092'],
});

const producer = kafka.producer();

const run = async () => {
    await producer.connect();
    await producer.send({
        topic: 'user-topic',
        messages: [{ value: 'Nous participons à la réunion de retrospective' }],
    });
    await producer.disconnect();
};

run().catch(console.error);