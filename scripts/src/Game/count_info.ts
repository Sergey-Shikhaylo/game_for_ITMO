export default function updateCount(count_:number) {
    let _h2 = document.getElementById("count") as HTMLHeadingElement;
    if (_h2.textContent != null) {
        let _h2_count = +_h2.textContent.substr(14);
    _h2_count += count_;
    _h2.textContent = "Заработано: $" + _h2_count;
    }
    
}