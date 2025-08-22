function fcmp_default(a, b)
{
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

function fcmp_numeric(a, b)
{
    return a - b;
}

// Strict binary (codepoint) comparison, like MySQL's utf8_bin collation
function fcmp_utf8_bin(a, b)
{
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

// Locale-aware, case-insensitive, like utf8_ci or utf8mb4_ci
function fcmp_utf8_ci(a, b)
{
    return a.localeCompare(b, undefined, {sensitivity: 'base'});
}

// Locale-aware, case-sensitive, like utf8_cs or utf8mb4_cs (but using system locale)
function fcmp_utf8_cs(a, b)
{
    return a.localeCompare(b, undefined, {sensitivity: 'variant'});
}

// Natural sort (numeric), case-insensitive
function fcmp_utf8_natural_ci(a, b)
{
    return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'});
}

// Natural sort (numeric), case-sensitive
function fcmp_utf8_natural_cs(a, b)
{
    return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'variant'});
}
