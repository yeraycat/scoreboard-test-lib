import React from 'react';

import { render } from '@testing-library/react';
import { describe, test } from '@jest/globals';
import Scoreboard from './Scoreboard';

describe('Scoreboard', () => {
    test('renders the Scoreboard component', () => {
        render(<Scoreboard />);
    });
});
