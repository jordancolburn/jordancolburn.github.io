import os
import shutil
from pathlib import Path

SRC_DIRS = ['styles', 'assets', 'uploads']
DEST_ROOT = Path('site')


def copy_directory(src: Path, dest: Path):
    """Copy directory recursively, overwriting existing contents."""
    if dest.exists():
        shutil.rmtree(dest)
    shutil.copytree(src, dest)


def main():
    DEST_ROOT.mkdir(parents=True, exist_ok=True)
    for folder in SRC_DIRS:
        src_path = Path(folder)
        if src_path.exists() and src_path.is_dir():
            dest_path = DEST_ROOT / folder
            copy_directory(src_path, dest_path)


if __name__ == "__main__":
    main()
