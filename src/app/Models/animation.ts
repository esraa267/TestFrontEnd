import { animate, style, transition, trigger } from "@angular/animations";

export const animation =  trigger('itemAnimation', [
    transition('void => *', [
      style({
        height: 0,
        opacity: 0,
        transform: 'scale(0.85)',
        'margin-bottom': 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
      }),
      animate(
        '50ms',
        style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*',
        })
      ),
      animate(800),
    ]),
    transition('*=>void', [
      animate(
        50,
        style({
          transform: 'scale(1.05)',
        })
      ),
      animate(
        50,
        style({
          transform: 'scale(1)',
          opacity: 0.75,
        })
      ),
      animate(
        '120ms ease-out',
        style({
          transform: 'scale(0.68)',
          opacity: 0,
        })
      ),

      animate(
        '150ms ease-out',
        style({
          height: 0,
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        })
      ),
    ]),
  ])