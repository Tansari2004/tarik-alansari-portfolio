const examples = {
  billing: {message:'“I was charged twice for my subscription.”',category:'Billing',priority:'Priority 3 / 5',explanation:'Suggested topic: a billing issue. Words such as “charged” and “subscription” help explain the choice. The suggested urgency is 3 out of 5.'},
  gate: {message:'“I have chest pain and feel faint.”',category:'Medical',priority:'Priority 5 / 5',explanation:'The phrases “chest pain” and “faint” match a built-in rule. The service skips the models and flags the message at urgency 5 out of 5 for human review. This is not a diagnosis.'}
};
document.querySelectorAll('[data-example]').forEach(button => {
  button.addEventListener('click', () => {
    const example = examples[button.dataset.example];
    document.querySelectorAll('[data-example]').forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
    Object.entries(example).forEach(([id, text]) => { document.getElementById(id).textContent = text; });
  });
});
