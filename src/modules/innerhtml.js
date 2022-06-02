const tasksHtml = ({ index, description }) => `
<li class="draggable list" id="${index}" draggable="true">
    <input type="checkbox" name="task" >
    <input type="text"  class="input-list" value="${description}">
    <div>
        <i class="material-icons dots">
            more_vert
        </i>
        <i class="material-icons delete">
            delete
        </i>
    </div>
</li>
`;

export default tasksHtml;