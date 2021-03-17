const d = document;
new ClipboardJS('.copy-button');

// tooltip
tippy('#myBtn', {
    content: 'Mail copied',
    arrow: true,
    animation: 'scale',
    trigger: 'click',
    delay: [300, 200],
    theme: 'tooltip',
    inertia: true
  });

export default function copyMail () {

    const instance = tippy(d.querySelector('#myBtn'));
    instance.hide();

}