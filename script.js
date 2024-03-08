async function fetchTodos() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        const tbody = document.getElementById('todosTableBody');
        data.forEach(ele => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${ele.id}</td>
                <td>${ele.title}</td>
                <td>${ele.completed ? 'completed' : 'in progress'}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

fetchTodos();