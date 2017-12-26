const rp = require('request-promise');

const postData = {
  "to": "dev.pxtan@gmail.com",
  "subject": "JEST testing",
  "body": "JEST!"
};

const options = {
  method: 'POST',
  uri: 'https://pxtan-sendemail.herokuapp.com/sendEmail',
  json: true,
  body: postData
};

test('Test a good call', () => {
  rp(options).then(res => expect(res).toMatchSnapshot());
});

describe('Test bad calls', () => {
  it(`JSON.body has no 'to' property`, () => {
    let newData = Object.assign({}, postData);
    let newOpts = Object.assign({}, options);
    delete newData.to;
    newOpts.options = newData;

    rp(newOpts).then(res => expect(res).toMatchSnapshot());
  });
});