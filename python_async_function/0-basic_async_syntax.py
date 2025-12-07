#!/usr/bin/env python3
"""Asynchronous coroutine that waits for a random delay.
This module defines wait_random, which waits for a random delay between
0 and max_delay (inclusive, float value) and eventually returns it.
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay and return the delay as a float.

    The delay is a random float between 0 and max_delay (inclusive).
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
