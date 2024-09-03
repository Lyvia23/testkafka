const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'product-service',
    brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'product-group' });

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'user-topic', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`Message reçu: ${message.value.toString()}`);
        },
    });
};

run().catch(console.error);