'use strict'

// Вопрос об "if"


if (-1) alert( 'first' );				// выполнится
if (-1 && 0) alert( 'second' );			// не выполнится
if (null || -1 && 1) alert( 'third' );	// выполнится