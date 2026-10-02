const examples = {
  billing: {message:'“I was charged twice for my subscription.”',category:'Billing',priority:'Priority 3 / 5',explanation:'The model identifies a billing request. Weighted terms such as “charged” and “subscription” help explain its response.'},
  gate: {message:'“I have chest pain and feel faint.”',category:'Medical',priority:'Priority 5 / 5',explanation:'The phrases “chest pain” and “faint” trigger the keyword gate. This bypasses the models and returns an escalation flag for human review—not a diagnosis.'}
};
document.querySelectorAll('[data-example]').forEach(button => {
  button.addEventListener('click', () => {
    const example = examples[button.dataset.example];
    document.querySelectorAll('[data-example]').forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
    Object.entries(example).forEach(([id, text]) => { document.getElementById(id).textContent = text; });
  });
});
