function maths(request, response) {
    const { num1, num2 } = request.query;
    const product = num1 * num2;
    // if using + you need to use parseInt; if not it will return a string
    // const sum = parseInt(num1) + parseInt(num2);
    response.json(product);
  }

  module.exports = maths;