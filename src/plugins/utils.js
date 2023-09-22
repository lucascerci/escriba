export function validateCPF(cpf) {
    // Remove any non-numeric characters from the CPF string
    cpf = cpf.replace(/\D/g, '');
    // Check if the CPF has the correct length (11 digits)
    if (cpf.length !== 11) {
      return false;
    }
    // Check if all digits are the same (e.g., 000.000.000-00)
    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
    // Calculate and validate the CPF checksum
    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(9))) {
      return false;
    }
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(10))) {
      return false;
    }
    return true;
}

export function formatDate(inputDate) {
    const parsedDate = new Date(inputDate);
    if (isNaN(parsedDate)) {
      return "";
    }
    const day = parsedDate.getDate();
    const month = parsedDate.getMonth() + 1;
    const year = parsedDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}

export function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) {
      return 'Invalid CPF';
    }
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
}

export function formatBRL(number) {
    // Define formatting options for Brazilian Reais
    const options = {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2, // Ensure two decimal places
      maximumFractionDigits: 2,
    };
  
    // Use the toLocaleString method to format the number
    return number.toLocaleString('pt-BR', options);
}