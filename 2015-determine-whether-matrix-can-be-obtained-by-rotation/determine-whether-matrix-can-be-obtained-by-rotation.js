var findRotation = function(mat, target) {
    const n = mat.length;

    function isEqual(a, b) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (a[i][j] !== b[i][j]) return false;
            }
        }
        return true;
    }

    function rotate(mat) {
        // transpose
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
            }
        }

        // reverse rows
        for (let row of mat) {
            row.reverse();
        }
    }

    for (let i = 0; i < 4; i++) {
        if (isEqual(mat, target)) return true;
        rotate(mat);
    }

    return false;
};