export const transformDecimal = async (req, res) => {
  const { number } = req.params;
  console.log(number);

  let value = parseInt(number, 10);
  console.log(value);

  if (isNaN(value)) {
    return res.json({ error: `${value} no es decimal` });
  }

  res.json({
    binary: value.toString(2),
    octal: value.toString(8),
    hex: value.toString(16),
  });
};

export const transformBinary = async (req, res) => {
  const { number } = req.params;
  console.log(number);

  let value = parseInt(number, 2);
  console.log(value);

  if (isNaN(value)) {
    return res.json({ error: `${value} no es binario` });
  }

  res.json({
    decimal: value,
    octal: value.toString(8),
    hex: value.toString(16),
  });
};

export const transformOctal = async (req, res) => {
  const { number } = req.params;
  console.log(number);

  let value = parseInt(number, 8);
  console.log(value);

  if (isNaN(value)) {
    return res.json({ error: `${value} no es octal` });
  }

  res.json({
    decimal: value,
    binary: value.toString(2),
    hex: value.toString(16),
  });
};

export const transformHex = async (req, res) => {
  const { number } = req.params;
  console.log(number);

  let value = parseInt(number, 16);
  console.log(value);

  if (isNaN(value)) {
    return res.json({ error: `${value} no es hexadecimal` });
  }

  res.json({
    decimal: value,
    binary: value.toString(2),
    octal: value.toString(8),
  });
};
