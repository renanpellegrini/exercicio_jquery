$(document).ready(function() {
	const $formTarefas = $('#form-tarefas');
	const $inputTarefa = $('#nova-tarefa');
	const $listaTarefas = $('#tarefas ul');

	console.log($formTarefas);
	console.log($inputTarefa);
	console.log($listaTarefas);

	$formTarefas.submit(function(e) {
		e.preventDefault();
		const tarefa = $inputTarefa.val().trim();
		if (tarefa !== '') {
			$listaTarefas.append(`<li>${tarefa}</li>`);
			$inputTarefa.val('');
		}
	});

});
