interface clickableElement extends HTMLElement {
  __clickOutsideHandler__: (e: Event) => void;
}

export default defineNuxtPlugin(({ vueApp }) => {
  const ClickOutsideDirective = {
    created(
      el: HTMLElement,
      binding: { value: (arg: Event) => void; arg?: string }
    ) {
      (el as clickableElement).__clickOutsideHandler__ = (event: Event) => {
        let exception;
        if (binding.arg) exception = document.getElementById(binding.arg);
        if (exception?.contains(event.target as Node | null)) return;
        if (!(el == event.target || el.contains(event.target as Node | null))) {
          binding.value(event);
        }
      };
      document.body.addEventListener(
        "click",
        (el as clickableElement).__clickOutsideHandler__
      );
    },
    unmounted(el: clickableElement) {
      document.body.removeEventListener(
        "click",
        (el as clickableElement).__clickOutsideHandler__
      );
    },
  };

  vueApp.directive("click-outside", ClickOutsideDirective);
});
