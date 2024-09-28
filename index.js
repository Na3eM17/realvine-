const views = document.querySelectorAll("#view");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        observer.unobserve(entry);
        }
    });

} 
);

views.forEach(card =>{
    observer.observe(card);
});

const views2 =document.querySelectorAll("#view2");
const observer2 = new IntersectionObserver(entries2 =>{
    entries2.forEach(entry2 =>{
        if(entry2.isIntersecting){
            entry2.target.classList.add("show2");
            observer2.unobserve(entry2);
        }
    });
});

views2.forEach(card2 =>{
    observer2.observe(card2);
}
)